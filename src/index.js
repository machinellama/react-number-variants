import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import numeral from 'numeral';

import formatValue from './util/format/formatValue';
import unformatLocaleNumber from './util/helpers/unformatNumber';

function format(value, props) {
  return formatValue(
    value,
    get(props, 'type'),
    get(props, 'locale'),
    get(props, 'currency'),
    get(props, 'min'),
    get(props, 'max'),
    get(props, 'minNumberOfDecimals'),
    get(props, 'maxNumberOfDecimals')
  )
}

class Number extends Component {
  constructor(props) {
    super(props);
    const formattedValue = format(get(props, 'value'), props);
    let numeralValue = numeral(formattedValue).value();

    if (get(props, 'type') === 'percent') {
      numeralValue = numeralValue * 100; // Numeral will divide initial value by 100
    }

    this.state = {
      formattedValue,
      value: numeralValue,
      focused: false
    };
  }

  render() {
    const onFocus = () => {
      this.setState({ focused: true });
    }

    const onChange = (e) => {
      this.setState({ value: e.target.value });

      if (this.props.emitOnChange && this.props.onEvent) {
        this.props.onEvent('change', numeral(e.target.value).value());
      }
    }

    const onBlur = () => {
      const formatted = format(this.state.value, this.props);
      const unformatted = unformatLocaleNumber(formatted, this.props.locale) || null;

      this.setState({ focused: false, value: unformatted, formattedValue: formatted });

      if (this.props.onEvent) {
        this.props.onEvent('blur', numeral(unformatted).value() || null);
      }
    }

    return (
      <div id={this.props.id} className={this.props.className}>
        {(this.props.showError && this.props.errorLocation === 'top') ?
          <div id="error-message" className="error-message">
            {this.props.errorMessage}
          </div>
        : null }

        <input
          id={this.props.inputId}
          className={this.props.inputClassName}
          type="text"
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          value={(this.state.focused) ? this.state.value : this.state.formattedValue}
        />

        {(this.props.showError && this.props.errorLocation === 'bottom') ?
          <div id={this.props.errorId} className={this.props.errorClassName}>
            {this.props.errorMessage}
          </div>
        : null }
      </div>

    );
  }
}

Number.propTypes = {
  id: PropTypes.string,
  inputId: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string, // number, percent, currency
  locale: PropTypes.string, // i.e. en-US
  currency: PropTypes.string, // i.e. USD
  min: PropTypes.number,
  max: PropTypes.number,
  minNumberOfDecimals: PropTypes.number, // least decimals is 0
  maxNumberOfDecimals: PropTypes.number, // most decimals is 20
  showError: PropTypes.bool,
  errorId: PropTypes.string,
  errorClassName: PropTypes.string,
  errorLocation: PropTypes.string, // 'bottom' or 'top'
  errorMessage: PropTypes.string,
  emitOnChange: PropTypes.bool, // emit event on-change or on-blur (for performance reasons)
  onEvent: PropTypes.func // optional function to handle return values
}

Number.defaultProps = {
  id: 'react-number-variants',
  inputId: 'number-input',
  className: 'number-container',
  inputClassName: 'number-input',
  value: null,
  type: 'number',
  locale: 'en-US',
  currency: 'USD',
  min: null,
  max: null,
  minNumberOfDecimals: 0,
  maxNumberOfDecimals: 20,
  showError: false,
  errorId: 'error-message',
  errorClassName: 'error-message',
  errorLocation: 'bottom',
  errorMessage: 'error',
  emitOnChange: true,
  onEvent: null
}

export default Number;

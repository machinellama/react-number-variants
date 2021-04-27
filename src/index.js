import React, { useState } from 'react';

import toNumber from './util/helpers/toNumber';
import formatValue from './util/format/formatValue';
import unformatLocaleNumber from './util/helpers/unformatNumber';
import isNumber from './util/helpers/isNumber';

function format(value, props) {
  return formatValue(
    value,
    props.type,
    props.locale,
    props.currency,
    props.min,
    props.max,
    props.minNumberOfDecimals,
    props.maxNumberOfDecimals
  )
}

function Number(props) {
  const [formattedValue, setFormattedValue] = useState(format(props.value, props));
  const [value, setValue] = useState(toNumber(props.value));
  const [focused, setFocused] = useState(false);
  const [lastValidValue, setLastValidValue] = useState(value);

  function onFocus() {
    setFocused(true);
  }

  function onChange(e) {
    const changeValue = e.target.value;
    setValue(changeValue);

    if (isNumber(changeValue) || !changeValue) {
      setLastValidValue(changeValue);
    }

    if (props.emitOnChange && props.onEvent && !props.disabled) {
      const numberValue = toNumber(changeValue);
      props.onEvent('change', numberValue);
    }
  }

  function onBlur() {
    const formatted = format(isNumber(value) ? value : lastValidValue, props);
    const unformatted = unformatLocaleNumber(formatted, props.locale);

    setFocused(false);
    setValue(unformatted);
    setFormattedValue(formatted);

    if (props.emitOnBlur && props.onEvent && !props.disabled) {
      props.onEvent('blur', toNumber(unformatted));
    }
  }

  return (
    <div id={props.id} className={props.className}>
      {(props.showError && props.errorLocation === 'top') && (
        <div id="error-message" className="error-message">
          {props.errorMessage}
        </div>
      )}

      {props.disabled ?
        <input
          id={props.inputId}
          className={props.inputClassName}
          type="text"
          onFocus={null}
          onChange={null}
          onBlur={null}
          value={formattedValue}
          disabled
        />
      :
        <input
          id={props.inputId}
          className={props.inputClassName}
          type="text"
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          value={focused ? value : formattedValue}
        />
      }


      {(props.showError && props.errorLocation === 'bottom') && (
        <div id={props.errorId} className={props.errorClassName}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

Number.defaultProps = {
  id: 'react-number-variants',
  inputId: 'number-input',
  className: 'number-container',
  inputClassName: 'number-input',
  value: undefined,
  type: 'number',
  locale: 'en-US',
  currency: 'USD',
  min: undefined,
  max: undefined,
  minNumberOfDecimals: 0,
  maxNumberOfDecimals: 20,
  showError: false,
  errorId: 'error-message',
  errorClassName: 'error-message',
  errorLocation: 'bottom',
  errorMessage: 'error',
  emitOnChange: true,
  emitOnBlur: true,
  onEvent: null,
  disabled: false
}

export default Number;

import React, { useState } from 'react';

import formatValue from './util/format/formatValue';
import isNumber from './util/helpers/isNumber';
import toNumber from './util/helpers/toNumber';
import unformatLocaleNumber from './util/helpers/unformatNumber';

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
          className={props.inputClassName}
          disabled
          id={props.inputId}
          onBlur={null}
          onChange={null}
          onFocus={null}
          placeholder={props.placeholder}
          type="text"
          value={formattedValue}
        />
      :
        <input
          className={props.inputClassName}
          id={props.inputId}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={props.placeholder}
          type="text"
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
  className: 'number-container',
  currency: 'USD',
  disabled: false,
  emitOnBlur: true,
  emitOnChange: true,
  errorClassName: 'error-message',
  errorId: 'error-message',
  errorLocation: 'bottom',
  errorMessage: 'error',
  id: 'react-number-variants',
  inputClassName: 'number-input',
  inputId: 'number-input',
  locale: 'en-US',
  max: undefined,
  maxNumberOfDecimals: 20,
  min: undefined,
  minNumberOfDecimals: 0,
  onEvent: null,
  placeholder: undefined,
  showError: false,
  type: 'number',
  value: undefined
}

export default Number;

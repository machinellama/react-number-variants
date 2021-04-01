
A multi-purpose React number component with variants for numbers, currencies, and percentages

Features include:

- format number on-blur; unformat on-focus
- format based on locale and currency
- min and max
- variable number of decimals places
- show error messages (above or below input)
- output an event with the input value (on-change or on-blur)


## Live demo with examples
https://react-number-variants.netlify.com/

## GitHub
https://github.com/MachineLlama/react-number-variants

## NPM
[<img src="https://img.shields.io/npm/v/react-number-variants">](https://www.npmjs.com/package/react-number-variants)<br/>
https://www.npmjs.com/package/react-number-variants

## Usage

    npm install react-number-variants --save

In your React component:

    import Number from 'react-number-variants';

Simple example:

    <Number
      inputClassName="form-control"
      minNumberOfDecimals={1}
      maxNumberOfDecimals={3}
      onEvent={(event, value) =>
        this.setState({ event, value })
      }
    />

## License
Absolutely none; feel free to clone and use any part of this code anywhere you want

## Props (all optional)
|Prop  |Description |Type |Default |
|--|--|--|--|
|**id** |ID of the entire Number component container |string |'react-number-variants'
|**inputId**|ID of the input box|string|'number-input'
|**className**|ClassName of the entire Number component container|string|'number-container'
|**inputClassName**|ClassName of the input box|string|'number-input'
|**value**|The default starting value for the input|number|null
|**type**| The type of number rendered; either 'number', 'percent', or 'currency'|string|'number'
|**locale**|The locale of the number rendered|string|'en-US'
|**currency**|If type is set to 'currency', then this prop will determine the symbol displayed|string|'USD'
|**min**|The minimum value the number can be|number|null
|**max**|The maximum value the number can be|number|null
|**minNumberOfDecimals**|Minimum number of decimal places allowed for value|number|0 (can't be less than 0)
|**maxNumberOfDecimals**|Maximum number of decimal places allowed for value|number|20 (can't be greater than 20)
|**showError**|Determines whether to show the error message or not|boolean|false
|**errorId**|ID of the error message|string|'error-message'
|**errorClassName**|ClassName of the error message|string|'error-message'
|**errorLocation**|Location of the error message. Can be either 'top' or 'bottom', relative to the input box|string|'bottom'
|**errorMessage**|The error message displayed|string|'error'
|**emitOnChange**|Determines whether to emit an event message on-change (can be used for performance or validation purposes)|boolean|true
|**emitOnBlur**|Determines whether to emit an event message on-blue|boolean|true
|**onEvent**|Function that can be used to get the event name and value from the input. Can be used to drive external events in your React component (like with validation to show the error message)|function|null
|**disabled**|Disable input|boolean|false

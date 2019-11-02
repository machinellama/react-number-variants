[<img src="https://img.shields.io/badge/react--number--variants-1.0.0-brightgreen">](https://www.npmjs.com/package/react-number-variants)

# react-number-variants
A React number component with variants for numbers, currencies, and percentages. This library combines many key features needed for a robust number input in a seamless, configurable way, so you don't have to spend days creating your own component.

Features include: 
- format number on-blur; unformat on-focus
- incorporate locale and currency
- min and max
- variable number of decimals places
- show error messages (above or below input)
- output an event with the input value (on-change or on-blur)

## Live demo with examples
https://react-number-variants.netlify.com/

## GitHub
https://github.com/MachineLlama/react-number-variants

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

## All Props (all optional)
**id:**  ID of the entire Number component container

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'react-number-variants'

**inputId:** ID of the input box

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'number-input'

**className:**  ClassName of the entire Number component container

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'number-container'

**inputClassName:**  ClassName of the input box

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'number-input'

**value:**  The default starting value for the input

&nbsp; &nbsp; &nbsp; &nbsp;type: number

&nbsp; &nbsp; &nbsp; &nbsp;default: null

**type:**  The type of number rendered; either 'number', 'percent', or 'currency'

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'number'

**locale:** The locale of the number rendered

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'en-US'

**currency:**  If type is set to 'currency', then this prop will determine the symbol displayed

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'USD'

**min:** The minimum value the number can be

&nbsp; &nbsp; &nbsp; &nbsp;type: number

&nbsp; &nbsp; &nbsp; &nbsp;default: null

**max:**  The maximum value the number can be

&nbsp; &nbsp; &nbsp; &nbsp;type: number

&nbsp; &nbsp; &nbsp; &nbsp;default: null

**minNumberOfDecimals:**  Minimum number of decimal places allowed for value

&nbsp; &nbsp; &nbsp; &nbsp;type: number

&nbsp; &nbsp; &nbsp; &nbsp;default: 0 (can't be less than 0)

**maxNumberOfDecimals:**  Maximum number of decimal places allowed for value

&nbsp; &nbsp; &nbsp; &nbsp;type: number

&nbsp; &nbsp; &nbsp; &nbsp;default: 20 (can't be greater than 20)

**showError:**  Determines whether to show the error message or not

&nbsp; &nbsp; &nbsp; &nbsp;type: boolean

&nbsp; &nbsp; &nbsp; &nbsp;default:false

**errorId:**  ID of the error message

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'error-message'

**errorClassName:**  ClassName of the error message

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'error-message'

**errorLocation:**  Location of the error message. Can be either 'top' or 'bottom', relative to the input box

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'bottom'

**errorMessage:**  The error message displayed

&nbsp; &nbsp; &nbsp; &nbsp;type: string

&nbsp; &nbsp; &nbsp; &nbsp;default: 'error'

**emitOnChange:**  Determines whether to emit an event message on-change. If false, then the event will only be fired on-blur (can be used for performance or validation purposes)

&nbsp; &nbsp; &nbsp; &nbsp;type: boolean

&nbsp; &nbsp; &nbsp; &nbsp;default: true

**onEvent:**  Function that can be used to get the event name and value from the input. Can be used to drive external event in your React component (like with validation to show the error message)

&nbsp; &nbsp; &nbsp; &nbsp;type: function

&nbsp; &nbsp; &nbsp; &nbsp;default: null

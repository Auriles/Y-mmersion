import React from 'react';
import PropTypes from 'prop-types'

const TextFieldGroup = ({ field, value, label, type, onChange, placeholder, required }) => {
    return (
        <div className="field">
            <p className="label-description">{label}</p>
            <div className="control">
                <input
                    type={type}
                    name={field}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder?label:""}
                    className="input-form"
                />
            </div>
        </div>
    )
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    placeholder:PropTypes.bool.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text',
    required: true,
    placeholder:false

}

export default TextFieldGroup;
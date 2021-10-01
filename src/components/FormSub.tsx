import React from 'react';
import {
    AbstractControl,
    FieldControl,
    FieldGroup,
    FormControl,
    FormGroup,
    Validators,
} from 'react-reactive-form';

const TextInput = ({handler, touched, hasError, meta}) => (
    <div>
        <input placeholder={`Enter ${meta.label}`} {...handler()} />
        <span>
            {touched && hasError('required') && `${meta.label} is required`}
        </span>
    </div>
);

const Checkbox = ({handler}: AbstractControl) => (
    <div>
        <input {...handler('checkbox')} />
        <label>&nbsp;&nbsp;I agree to the terms and condition.</label>
    </div>
);

class FormSub extends React.Component {
    myForm = new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl(''),
        terms: new FormControl(false),
    });
    handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        alert(`You submitted \n ${JSON.stringify(this.myForm.value, null, 2)}`);
    }
    handleReset() {
        this.myForm.reset();
    }
    render() {
        return (
            <FieldGroup
                control={this.myForm}
                render={({}: AbstractControl) => (
                    <form>
                        <FieldControl
                            name="first_name"
                            render={TextInput}
                            // Use meta to add some extra props
                            meta={{
                                label: 'First Name',
                                placeholder: 'Enter first name',
                            }}
                        />

                        <FieldControl
                            name="last_name"
                            meta={{
                                label: 'Last Name',
                                placeholder: 'Enter last name',
                            }}
                            render={TextInput}
                        />

                        <FieldControl name="terms" render={Checkbox} />
                        <div>
                            <button onClick={(e) => this.handleSubmit(e)}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() => this.handleReset()}>
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        );
    }
}
export default FormSub;

document.addEventListener('alpine:init',  () => {
    Alpine.data('signupform', () => ({
        username: '',
        password: '',
        confirm_password: '',
        belt_color: '',
        short_bio: '',
        newsletter: false,

        currentPassword: false,
        confirmPassword: false,
        errors: {},
        beltChoice: ['black', 'blue', 'green', 'orange', 'brown', 'purple'],
        success: false,

        validatedForm () {
            this.errors = {};

            if (this.username.length < 3 ) {
                this.errors.username = 'Username must be at least 3 characters';
            }

            if (this.password.length < 4) {
                this.errors.password = 'Password must be at least 4 characters';
            }

            if (this.password !== this.confirm_password) {
                this.errors.confirm_password = 'Passwords do not match';
            }

            if (!this.belt_color) {
                this.errors.belt_color = 'Please select a belt color';
            }

            if (this.short_bio.length < 10) {
                this.errors.short_bio = 'Short bio must be 10 characters or less';
            }
        },

        submitForm ( $event ) {
            this.validatedForm();
            
            console.log(this.errors);

            if (Object.keys(this.errors).length === 0) {
                console.log(this.username);
                console.log(this.password);
                console.log(this.confirm_password);
                console.log(this.belt_color);
                console.log(this.short_bio);
                console.log(this.newsletter);

                $event.target.reset();

                this.success = true;
            }
        }
    }));
});

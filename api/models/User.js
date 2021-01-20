const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: {
        type: String,
    },
    accountId: String,
    socialAccount: String,
    countryCode: { type: Number, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email incorrect'],
    },
    roleId: { type: Number, default: 1 },
}, { timestamps: true });

userSchema.methods.compare = function(password, isReset) {
    if (this.password || this.reset_code)
        return bcrypt.compareSync(
            password.toString(),
            isReset ? this.reset_code : this.password
        );
    else return false;
};

userSchema.pre('save', function(next) {
    const that = this;
    if (that.accountId) {
        delete that.password;
    } else {
        if (
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(
                that.password
            )
        ) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(that.password, salt);
            that.password = hash;
        } else {
            throw new Error('Input valid Password');
        }
    }
    next();
});

module.exports = model('User', userSchema);
const path = require('path');
const _ = require('lodash')
class Replace {
    constructor(providedOptions = {}) {
        this.options = Object.assign({}, providedOptions);
        // Object.keys(Options.DEFAULTS).forEach((option) => {
        //     this.options[option] = this.options[option] || Options.DEFAULTS[option];
        // });

        // if (this.options.base && !providedOptions.format) {
        //     this.options.format = path.extname(this.options.base);
        // }

        // if (this.options.out) {
        //     this.options.format = path.extname(this.options.out);
        // }
    }
    readInsideObject(keyInput, object) {
        let keys = keyInput.split(/\./g)
        let data = Object.assign({}, object)
        _.map(keys, (key) => {
            data = data[key]
        })
        return data
    }
    checkRegex(input){
        let keys = input.match(/\${[\w.]*}/g)
        if(keys===null){
            return input
        }
        _.map(keys, (key) => {
            let formatKey = key.replace(/\${|}/g, '')
            let dataReplace = this.readInsideObject(formatKey,this.options)
            input = input.replace(key,dataReplace)
        })
        return input
    }
    replace(input) {
        if (typeof (input) == "string") {
            input = this.checkRegex(input)                      
        } else if (_.isArray(input) || _.isObject(input)) {
            _.map(input,(item,key)=>{             
                let keyReplace = this.replace(key)
                if (keyReplace != key) {
                    input[keyReplace] = this.replace(item)
                    delete input[key]
                } else {
                    input[key] = this.replace(item)
                }                 
            })        
        }
        return input
        
    }
    exec(data) {
        return this.replace(data)
    }

}

// Replace.DEFAULTS = {
//     format: '.json',
//     logger: () => {},
//     ignore: ['node_modules/**/*', 'bower_modules/**/*'],
// };

module.exports = Replace;


// clase versión 1
(() => {

    type Gender = "M" | "F";

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor(name: string, gender: Gender, birthDate: Date){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate
        }
    }

    const newPerson = new Person('Freddy', 'M', new Date(2022, 9, 6));
    console.log( { newPerson })

})();


// clase versión 2 - misma funcionalidad que el anterior
(() => {

    type Gender = "M" | "F";

    class Person {

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date){}
    }

    const newPerson = new Person('Freddy', 'M', new Date(1988, 9, 6));
    console.log( { newPerson })

})();


// clase versión 3 - Rompiendo la regla de responsabilidad única (DRY)
(() => {

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
        }
    }

    const newUser = new User('f@example.com', 'admin', new Date(2020, 7, 14), 'Freddy', 'M', new Date(1988, 9, 6))
    console.log( { newUser })


})();


// clase versión 4 - Extendiendo la clase Users de forma descontrolada
(() => {

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date){}
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    class userSetting extends User {
        constructor(
            public workingDirectory     : string,
            public lastOpenFolder       : string,
            email                       : string,
            role                        : string,
            name                        : string,
            gender                      : Gender,
            birthDate                   : Date
        ) {
            super(email, role, name, gender, birthDate);
        }
    }

    const userSettings = new userSetting('/usr/home', '/home', 'f@example.com', 'admin', 'Freddy', 'M', new Date(1988, 9, 6))
    console.log( { userSettings })

})();




// clase versión 5 - Refactorizando basado en la responsabilidad única
// priorizar la composición vs la herencia
(() => {

    type Gender = "M" | "F";

    interface PersonProps {
        name        : string;
        gender      : Gender;
        birthDate   : Date;
    }

    class Person {
        public name : string;
        public birthDate : Date;        
        public gender : Gender;

        constructor( {name, birthDate, gender} : PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps {
        email       : string;
        role        : string;
    }

    class User {
        
        public email        : string;
        public role         : string;
        public lastAccess   : Date;

        constructor(
            { email, role}: UserProps
        ) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    interface settingProps {
        workingDirectory    : string;
        lastOpenFolder      : string;
    }

    class Setting {
        
        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor(
            { workingDirectory, lastOpenFolder } : settingProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        person  : Person;
        user    : User;
        setting : Setting;
    }

    class UserSettings {
        public person   : Person;
        public user     : User;
        public setting  : Setting;

        constructor({person, user, setting}: UserSettingsProps){
            this.person = person;
            this.user = user;
            this.setting = setting;
        }
    }

    const person = new Person({name: 'Freddy', gender: 'M', birthDate: new Date(1988, 6, 6)});
    const user = new User({email: 'f@example.com', role: 'admin'});
    const setting = new Setting({workingDirectory: '/usr/home', lastOpenFolder: '/home'})

    const userSettings = new UserSettings({person: person, user: user, setting: setting})
    console.log( { userSettings })

})();
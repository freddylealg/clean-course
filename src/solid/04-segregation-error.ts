() => {

    interface Bird {
        fly(): void;
        eat(): void;
        run(): void;
    }
    
    
    class Tucan implements Bird{
        public fly() {}
        public eat() {}
        public run() {}
    }
    
    
    class Huminbird implements Bird{
        public fly() {}
        public eat() {}
        public run() {}
    }
    
    // Break interfaz segregation, ostrich cannot fly
    class Ostrich implements Bird{
        public fly() {
            throw new Error('Esta ave no puede volar');
        }
        public eat() {}
        public run() {}
    }
    
    class Pinguin implements Bird{
        public fly() {
            throw new Error('Esta ave no puede volar');
        }
        public eat() {}
        public run() {}
        public swim() {} // not in interface
    }
}

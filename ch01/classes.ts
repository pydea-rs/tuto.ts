
class Person {
    /* here is for normal field declaration
    name: type
    */

    // this line does multiple things automatically:
    public constructor(private readonly name:string , private message: string) {}
    // defines name and msg fields as private
    // sets them to the arguments sent while decalring objects
    // makes name readonly so that it cannot change after initalization

    public speak() {
        console.log(`${this.name} says ${this.message}`);
    }

    public setMessage(msg: string) {
        this.message = msg;

        // this.name = 'test'; // as it seems when uncommented, this.name cannot change!
    }

}

const a = new Person('x', 'fuck');
a.speak();
new Person('y', 'you you you').speak();

// Page: 47 - Getters and setters
// custom page 41

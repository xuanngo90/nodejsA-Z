var person = {
    ho: 'Ngo',
    ten: 'Xuan',
    hanhdong: function() {
        console.log("Chao ban : " + this.ho + " " + this.ten);
    }
}

person.hanhdong();
console.log(person["ho"]);
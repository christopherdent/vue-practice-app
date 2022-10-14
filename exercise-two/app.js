const app = Vue.createApp({
    data: function() {
// equally could say data(){keys: values}, which means that the value of the data key is a function

        return{
            myName: "Chris",
            myAge: "39",
            oldMe: "50",
            favNum: Math.random(),
            cjdLink: "http://www.christopher-dent.com",
            houseStark: "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142"

        }
    },
    methods: {
        otherFavNum() {
            min = Math.ceil(0)
            max = Math.floor(1)
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
});

app.mount('#user-goal');
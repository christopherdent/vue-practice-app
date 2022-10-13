const app = Vue.createApp({
    data: function() {
// equally could say data(){keys: values}, which means that the value of the data key is a function

        return{
            courseGoal: "Finish these exercises so I can help my team as much as I can!",
            howSo: "Vue is interpolating this text into the HTML page, wow!",
            evenArray: ['Even Arrays!', 'Calvin', 'Chilito', 'Julia', 'Angie', 'Chris'],
            cjdLink: 'http://www.christopher-dent.com'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()           
                if (randomNumber < 0.5) {return "play with vue"} 
                else {return "master vue"}            
        }
    }
});



app.mount('#user-goal');
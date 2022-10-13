// const myButton = document.querySelector('button')
// const clearButton = document.getElementById('clear')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')



// myButton.addEventListener('click', addGoal)  //don't execute the function, just point at it, so the fn is executed when the click occurs!
// clearButton.addEventListener('click', clearGoals)

// function addGoal(){
//     const enteredValue = inputEl.value;   
//     const listItemEl = document.createElement('li')  
//     listItemEl.textContent = enteredValue    //kind of like innerHTML
//     listEl.appendChild(listItemEl)   ///this is a list element.  Append or appendChild would both work.  Append a list item, L, which we just created.  If we do all that and reload.  
//     inputEl.value = ''
// }


// function clearGoals(){
   
//    listEl.textContent = ''
// }

Vue.createApp({
    data() {    //this is a property named data, which has a function as a value, all within an object.  One piece of data will be the list of goals; another is what the user entered.  MUST be called data.
        return {
            goals: [],   ///empty array
            enteredValue: ''    //connect this with the inout by a special html attribute, v-model.  This is only understood by Vue.  as a vlue for that, we use the name of the property, here, entered value.  
                    ///now vue is aware of these pieces of data
            };
        },
    methods: {
        addGoal() {
        this.goals.push(this.enteredValue)  ///"this" refers to the data object, that's Vue magic. 
        this.enteredValue = ""
        }
    }
}).mount('#app')



///data and methods are the important keys
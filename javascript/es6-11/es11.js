{
    const person1 = {
        name: 'minbro',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'James'
            }
        }
    }
    const person2 = {
        name: 'Kate'
    }

    function printManager(person) {
        console.log(person.job?.manager?.name)
    }
    printManager(person1)
    printManager(person2)
}

{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'minbro'
        const userName = name || 'Guest'
        console.log(userName)
    }
    
    {
        const name = null
        const userName = name || 'Guest'
        console.log(userName)
    }
}
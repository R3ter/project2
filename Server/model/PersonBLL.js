const PersonModel = require("./PersonModel")


const getAllPersons = async () => {
    const persons = await PersonModel.find({})
    return persons

}

const getPerson = async (id) => {
    const person = await PersonModel.findById(id)
    return person

}

const addPerson = async (obj) => {
    const person = new PersonModel(obj)
    await person.save()
    return 'Created'

}

const updatePerson = async (id, obj) => {
    await PersonModel.findByIdAndUpdate(id, obj)    
    return 'Updated'

}

const deletePerson = async (id, ) => {
   await PersonModel.findByIdAndDelete(id)    
    return 'Deleted'

}


module.exports = {getAllPersons, getPerson, addPerson, updatePerson, deletePerson}

function handleSelect(selected){
    document.querySelectorAll('.option').forEach(option=>{
        option.classList.remove('selected')
    })
    selected.classList.add('selected')
}
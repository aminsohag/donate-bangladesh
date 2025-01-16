document.getElementById('donate-page').addEventListener('click', function(){
    
    showSection('donate-section');
    document.getElementById('donate-page').classList.add('bg-[#B4F461]');
    document.getElementById('history-page').classList.remove('bg-[#B4F461]');
})

document.getElementById('history-page').addEventListener('click', function(){
    
    showSection('history-section');
    document.getElementById('history-page').classList.add('bg-[#B4F461]');
    document.getElementById('donate-page').classList.remove('bg-[#B4F461]');
})

function showSection(id){
    // hide all the section
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
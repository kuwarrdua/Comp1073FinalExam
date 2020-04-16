function useAsynchronous() {
    fetch('https://kuwarrdua.github.io/Comp1073FinalExam/cats.json').then(function(response) {
        return response.json();
    }).then(function(jso) {
        let jsonObj = jso;
        cats(jsonObj);
    }).catch(function(error) {
        alert('The problem in fetching is: ' + error.message);
    });
};

function cats(jsonObj) {
    let cats = jsonObj.cats;
    let section = document.querySelector('section');
    for (let i = 0; i < cats.length; i++) {
    	let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');
        //setting the  attributes
        img.setAttribute('src', cats[i].photo);
        img.setAttribute('alt', cats[i].photo);
        h2.textContent = cats[i].name;
        p1.textContent = 'Species ' + cats[i].species;
        p2.textContent = 'Age ' + cats[i].age;
        let favFoods = cats[i].favFoods;
        for(let j =0; j<favFoods.length;j++){
            let listItem = document.createElement('li');
            listItem.innerHTML = favFoods[j];
            ul.appendChild(listItem);
        }
        //appending the elements in the section which is in body of html document
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);
    }
}




const loadCategories = async () => {
    const url = (`https://openapi.programming-hero.com/api/news/categories`);
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category)
}

const displayCategories = categories => {
    // console.log(categories)
    categories.forEach(category => {
        // console.log(category)
        const categoriesContainer = document.getElementById('category-ul-container');
        const categoriesLi = document.createElement('li');
        categoriesLi.classList.add('d-inline');
        categoriesLi.classList.add('flex-sm-column')
        categoriesLi.innerHTML = `
        <a class="text-decoration-none px-3 text-secondary" onclick="loadCategoryId('${category.category_id}')" type="button" href="#">${category.category_name}</a>
        `;
        categoriesContainer.appendChild(categoriesLi);
    })
};

const loadCategoryId = async (category_id) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
}



loadCategories();
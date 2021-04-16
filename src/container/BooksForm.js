import React from 'react';

function BooksForm() {

const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const categoryOption = (CATEGORIES) => { 
    return CATEGORIES.map((category) => {
        return(<option value={category}>{category}</option>);
    });
};
return(<form>
        <div className='title'>
        <label for="title">Title</label>
        <input name="title" id='title' type="text"/>
        </div>
        <div className="category">
        <label for="category">Category</label>
        <select name="category" id="category">
            {categoryOption(CATEGORIES)}
        </select>
        </div>
        <div>
        <input type="submit" value="Submit"/>
        </div>
    </form>);
}

export default BooksForm;
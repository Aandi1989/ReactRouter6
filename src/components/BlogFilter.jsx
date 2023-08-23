import { useState } from 'react';

export const BlogFilter = ({postQuery, latest, setSearchParams}) => {
    const [search, setSearch] =useState(postQuery);
    const [checked, setChecked] =useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};

        if(query.length){params.post = query};
        if(isLatest){params.latest = true};

        setSearchParams(params)
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmit} className='mb-4'>
            <input type="search" name="search" className='border px-1 focus:outline-none' 
            value={search} onChange={e => setSearch(e.target.value)}/>
            <label className='px-4'>
                <input type="checkbox" name='latest' checked={checked} 
                 onChange={e => setChecked(e.target.checked)}/> New only
            </label>
            <input type="submit" value="Search" className='ml-2 border rounded-sm px-2 bg-gray' 
            />
        </form>
    )
}

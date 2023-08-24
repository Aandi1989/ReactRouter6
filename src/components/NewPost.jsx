import { Form } from 'react-router-dom';

export const NewPost = ({submitting}) => {

  return (
    <Form action="/posts/new" method='post'>
        <label>
            Title:
            <input type="text" name='title' className='border rounded px-1 mx-1'/>
        </label>
        <label>
            Body:
            <input type="text" name='body' className='border rounded px-1 mx-1'/>
        </label>
        <input type="hidden" name="userId" value="1"/>
        <input type="submit" value="Add post" disabled={submitting} 
        className={`border rounded-sm px-2 ml-3 ${submitting ? 'bg-white' : 'bg-gray'} 
        ${submitting ? 'text-gray' : 'text-black'}`}/>
    </Form>
  )
}


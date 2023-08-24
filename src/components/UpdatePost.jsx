import { Form } from 'react-router-dom';

export const UpdatePost = ({id, title, body, userId, submitting}) => {
  return (
    <Form method='post' action={`/posts/${id}/edit`}>
        <label>
            Title:
            <input type="text" name="title" defaultValue={title} className='border rounded px-1 mx-1'/>
        </label>
        <label>
            Body:
            <input type="text" name="body" defaultValue={body} className='border rounded px-1 mx-1'/>
        </label>
        <input type="hidden" name="userId" value={userId}/>
        <input type="hidden" name="id" value={id}/>
        <input type="submit" value="Update post" disabled={submitting} 
        className={`border rounded-sm px-2 ml-3 ${submitting ? 'bg-white' : 'bg-gray'} 
        ${submitting ? 'text-gray' : 'text-black'}`}/>
    </Form>
  )
}

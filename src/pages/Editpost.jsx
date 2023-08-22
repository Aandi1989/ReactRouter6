import {useParams} from 'react-router-dom';

export const Editpost = () => {
  const { id } = useParams();

  return (
    <div>
        <h1 className="text-3xl text-center">Edit post {id}</h1>
    </div>
  )
}

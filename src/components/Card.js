import { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ deleteTask, id, updateTask, task }) => {
  const [modal, setModal] = useState('none');

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleUpdate = (newTask) => {
    updateTask(newTask, id);
  };

  const colors = [
    {
      primaryColor: '#72FAA8',
    },
    {
      primaryColor: '#72FAFA',
    },
    {
      primaryColor: '#7288FA',
    },
    {
      primaryColor: '#FA72C4',
    },
    {
      primaryColor: '#FA727A',
    },
    {
      primaryColor: '#FB3A45',
    },
  ];

  return (
    <>
      <div
        className='card-wrapper'
        style={{ borderTop: `12px solid ${colors[id % 6].primaryColor}` }}
      >
        <span className='card-title'>{task.title}</span>
        <p className='card-description'>{task.description}</p>

        <div className='buttons'>
          <i
            className='bx bxs-edit button-edit'
            onClick={() => setModal('flex')}
          ></i>
          <i className='bx bx-trash button-delete' onClick={handleDelete}></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        handleUpdate={handleUpdate}
        closeModal={setModal}
        task={task}
      />
    </>
  );
};

export default Card;

import { useState } from 'react';

const CreateTask = ({ modal, closeModal, addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle('');
    setDescription('');
    closeModal('none');
  };

  return (
    <div className='modal' style={{ display: `${modal}` }}>
      <form action='' onSubmit={handleSubmit} className='modal-form'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            placeholder='Title...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            rows='5'
            id='description'
            placeholder='Description...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <i
          className='bx bx-x modal-close'
          onClick={() => closeModal('none')}
        ></i>
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateTask;

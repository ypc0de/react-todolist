import { useState, useEffect } from 'react';
const EditTask = ({ modal, closeModal, handleUpdate, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ title, description });
    setTitle('');
    setDescription('');
    closeModal('none');
  };

  return (
    <div className='modal' style={{ display: `${modal}` }}>
      <form onSubmit={handleSubmit} className='modal-form'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            placeholder='Title...'
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            rows='5'
            id='description'
            placeholder='Description...'
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <i
          className='bx bx-x modal-close'
          onClick={() => closeModal('none')}
        ></i>
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditTask;

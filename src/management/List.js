import Show from './Show';

function List({ tasks, onDelete, onUpdate, toast }) {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Show
            toast={toast}
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </>
  );
}

export default List;

import '../styles/components/progress.scss';
import { progressProps } from 'type';
const ProgressLayout = ({ children, level }: progressProps) => {
  return (
    <>
      {children}
      <div className="progress">
        <p>
          <span>
            {level === 1
              ? '1'
              : level === 2
              ? '2'
              : level === 3
              ? '3'
              : level === 4
              ? '4'
              : ''}
          </span>
          /4
        </p>
        <ul>
          <li className={1 <= level ? 'finished' : ''}></li>
          <li className={2 <= level ? 'finished' : ''}></li>
          <li className={3 <= level ? 'finished' : ''}></li>
          <li className={4 <= level ? 'finished' : ''}></li>
        </ul>
      </div>
    </>
  );
};

export default ProgressLayout;

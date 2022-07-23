import logo from '../../../images/comX.png';
import '../../../styles/dashboard.scss';

const OrderBook = () => {
  return (
    <header className='dashboard'>
      <div className="one">
        <div className="img-box">
          <img src={logo} alt="image of comX logo" />
        </div>
        <div className="mode">
          <span>light</span>
          <div className="img-box">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="7.15063"
                cy="7.49996"
                rx="2.95044"
                ry="2.95455"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.15105 1V2.18182"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.15105 12.8182V14.0001"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.55975 2.90271L3.39768 3.7418"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9036 11.2582L11.7415 12.0973"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.659668 7.50004H1.83985"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4614 7.50004H13.6416"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.55975 12.0973L3.39768 11.2582"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9036 3.7418L11.7415 2.90271"
                stroke="#4A4A4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="img-box">
          <svg
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.699747 1.94938C0.512706 1.73821 0.506832 1.38897 0.686705 1.16924C0.778933 1.05669 0.902178 1 1.02554 1C1.14279 1 1.26004 1.05103 1.35122 1.15393L4.40589 4.60222C4.498 4.70622 4.55005 4.84995 4.55005 5.00002C4.55005 5.14995 4.498 5.29367 4.40589 5.39767L1.35122 8.84596C1.16417 9.05714 0.866579 9.05038 0.686705 8.83065C0.506832 8.61093 0.512706 8.26168 0.699747 8.05051L3.40208 5.00002L0.699747 1.94938Z"
              fill="#333333"
              stroke="#333333"
              stroke-width="0.3"
            />
          </svg>
        </div>
        <ul>
          <li>
            <span className="text3">CASH BALANCE</span>
            <span>₦8,374,763</span>
          </li>
          <li>
            <span className="text3">SECURITIES VALUE</span>
            <span>₦8,374,763</span>
          </li>
          <li>
            <span className="text3">LOAN BALANCE</span>
            <span>₦7,542,246</span>
          </li>
        </ul>
      </div>
      <div className="three">
        <button className="btn-darker">DEMO</button>
        <div className="img-box">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.98139 1.1444C1.77051 0.957106 1.42175 0.951223 1.20233 1.13134C1.08994 1.2237 1.03333 1.34711 1.03333 1.47064C1.03333 1.58806 1.08429 1.70547 1.18704 1.79677L4.63054 4.85564C4.7344 4.94788 4.87793 5 5.02779 5C5.17751 5 5.32104 4.94788 5.42489 4.85564L8.86839 1.79677C9.07927 1.60947 9.07252 1.31146 8.8531 1.13134C8.63368 0.951223 8.28493 0.957106 8.07405 1.1444L5.02779 3.85045L1.98139 1.1444Z"
              fill="#333333"
              stroke="#333333"
              stroke-width="0.3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default OrderBook;

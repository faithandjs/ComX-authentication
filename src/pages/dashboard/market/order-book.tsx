import { useEffect } from 'react';
import logo from '../../../images/comX.png';
import '../../../styles/dashboard.scss';

const OrderBook = () => {
  useEffect(() => {
    console.log();
    let socket = new WebSocket(
      'wss://comx-sand-api.afexnigeria.com/stream/trades',
    );

    socket.onopen = function (e) {
      // alert('[open] Connection established');
      // alert('Sending to server');
      console.log('open', e);
      // socket.send('My name is John');
    };

    socket.onmessage = function (event) {
      console.log(`[message] Data received from server: ${event.data}`);
      console.log(JSON.parse(event.data));
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(event.reason);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
      }
    };

    socket.onerror = function (error) {
      console.log(`[error] ${error}`);
    };
  });
  return (
    <>
      <header className="dashboard">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15105 1V2.18182"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15105 12.8182V14.0001"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.55975 2.90271L3.39768 3.7418"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9036 11.2582L11.7415 12.0973"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.659668 7.50004H1.83985"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4614 7.50004H13.6416"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.55975 12.0973L3.39768 11.2582"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9036 3.7418L11.7415 2.90271"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.699747 1.94938C0.512706 1.73821 0.506832 1.38897 0.686705 1.16924C0.778933 1.05669 0.902178 1 1.02554 1C1.14279 1 1.26004 1.05103 1.35122 1.15393L4.40589 4.60222C4.498 4.70622 4.55005 4.84995 4.55005 5.00002C4.55005 5.14995 4.498 5.29367 4.40589 5.39767L1.35122 8.84596C1.16417 9.05714 0.866579 9.05038 0.686705 8.83065C0.506832 8.61093 0.512706 8.26168 0.699747 8.05051L3.40208 5.00002L0.699747 1.94938Z"
                fill="#333333"
                stroke="#333333"
                strokeWidth="0.3"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.98139 1.1444C1.77051 0.957106 1.42175 0.951223 1.20233 1.13134C1.08994 1.2237 1.03333 1.34711 1.03333 1.47064C1.03333 1.58806 1.08429 1.70547 1.18704 1.79677L4.63054 4.85564C4.7344 4.94788 4.87793 5 5.02779 5C5.17751 5 5.32104 4.94788 5.42489 4.85564L8.86839 1.79677C9.07927 1.60947 9.07252 1.31146 8.8531 1.13134C8.63368 0.951223 8.28493 0.957106 8.07405 1.1444L5.02779 3.85045L1.98139 1.1444Z"
                fill="#333333"
                stroke="#333333"
                strokeWidth="0.3"
              />
            </svg>
          </div>
        </div>
      </header>
      <main className="dashboard">
        <ul className="one1">
          <li>
            <button>
              <svg
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6667 14.3333V15.0833H24.4167V14.3333H23.6667ZM23.6667 1H24.4167V0.25H23.6667V1ZM13 1V0.25H12.25V1H13ZM23.6667 25V25.75H24.4167V25H23.6667ZM23.6667 17H24.4167V16.25H23.6667V17ZM13 17V16.25H12.25V17H13ZM37 25V25.75H37.75V25H37ZM37 11.6667H37.75V10.9167H37V11.6667ZM26.3333 11.6667V10.9167H25.5833V11.6667H26.3333ZM26.3333 9H25.5833V9.75H26.3333V9ZM37 9V9.75H37.75V9H37ZM37 1H37.75V0.25H37V1ZM13 15.0833H23.6667V13.5833H13V15.0833ZM24.4167 14.3333V1H22.9167V14.3333H24.4167ZM23.6667 0.25H13V1.75H23.6667V0.25ZM12.25 1V14.3333H13.75V1H12.25ZM13 25.75H23.6667V24.25H13V25.75ZM24.4167 25V17H22.9167V25H24.4167ZM23.6667 16.25H13V17.75H23.6667V16.25ZM12.25 17V25H13.75V17H12.25ZM26.3333 25.75H37V24.25H26.3333V25.75ZM37.75 25V11.6667H36.25V25H37.75ZM37 10.9167H26.3333V12.4167H37V10.9167ZM25.5833 11.6667V25H27.0833V11.6667H25.5833ZM25.5833 1V9H27.0833V1H25.5833ZM26.3333 9.75H37V8.25H26.3333V9.75ZM37.75 9V1H36.25V9H37.75ZM37 0.25H26.3333V1.75H37V0.25Z"
                  fill="#1E1E1E"
                />
              </svg>
            </button>
            <span>Overview</span>
          </li>
          <li>
            <button>
              <svg
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.4375 8.375L21.0156 15.7969L17.1094 11.8906L11.25 17.75"
                  stroke="#D71E0E"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.17188 0.390625V24.6094"
                  stroke="#D71E0E"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.39062 24.6094H33.5156"
                  stroke="#D71E0E"
                  strokeWidth="1.5"
                />
                <path
                  d="M23.75 8.375H28.4375V13.0625"
                  stroke="#D71E0E"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="orange">Market</span>
          </li>
          <li>
            <button>
              <svg
                viewBox="0 0 47 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="7"
                  width="26"
                  height="17"
                  rx="2"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 24V3.55556C28 2.14416 26.8807 1 25.5 1H20.5C19.1193 1 18 2.14416 18 3.55556V24"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>Portfolio</span>
          </li>
          <li>
            <button>
              <svg
                viewBox="0 0 62 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 23V20.6667C38 18.0893 35.7614 16 33 16H23C20.2386 16 18 18.0893 18 20.6667V23"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="28"
                  cy="6"
                  r="5"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 23V20.615C43.9982 18.4412 42.3533 16.5434 40 16"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 1C37.3537 1.52626 39 3.37831 39 5.5C39 7.62169 37.3537 9.47374 35 10"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>Community</span>
          </li>
          <li>
            <button>
              <svg
                viewBox="0 0 43 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.375 1H13.75C12.2312 1 11 2.20883 11 3.7V25.3C11 26.7912 12.2312 28 13.75 28H30.25C31.7688 28 33 26.7912 33 25.3V10.45L23.375 1Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 1V11H33"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>Reports</span>
          </li>
          <li>
            <button>
              <svg
                viewBox="0 0 45 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="23"
                  cy="15"
                  r="4"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.4182 18.8182C32.0716 19.6036 32.2379 20.5209 32.8382 21.1345L32.9145 21.2109C33.3925 21.6884 33.6611 22.3362 33.6611 23.0118C33.6611 23.6874 33.3925 24.3353 32.9145 24.8127C32.4371 25.2907 31.7892 25.5593 31.1136 25.5593C30.438 25.5593 29.7902 25.2907 29.3127 24.8127L29.2364 24.7364C28.6227 24.1361 27.7054 23.9697 26.92 24.3164C26.1507 24.6461 25.6506 25.4012 25.6473 26.2382V26.4545C25.6473 27.8604 24.5076 29 23.1018 29C21.696 29 20.5564 27.8604 20.5564 26.4545V26.34C20.5362 25.4779 19.9911 24.7158 19.1818 24.4182C18.3964 24.0716 17.4791 24.2379 16.8655 24.8382L16.7891 24.9145C16.3116 25.3925 15.6638 25.6611 14.9882 25.6611C14.3126 25.6611 13.6647 25.3925 13.1873 24.9145C12.7093 24.4371 12.4407 23.7892 12.4407 23.1136C12.4407 22.438 12.7093 21.7902 13.1873 21.3127L13.2636 21.2364C13.8639 20.6227 14.0303 19.7054 13.6836 18.92C13.3539 18.1507 12.5988 17.6506 11.7618 17.6473H11.5455C10.1396 17.6473 9 16.5076 9 15.1018C9 13.696 10.1396 12.5564 11.5455 12.5564H11.66C12.5221 12.5362 13.2842 11.9911 13.5818 11.1818C13.9284 10.3964 13.7621 9.47915 13.1618 8.86545L13.0855 8.78909C12.6075 8.31164 12.3389 7.66377 12.3389 6.98818C12.3389 6.31259 12.6075 5.66472 13.0855 5.18727C13.5629 4.70929 14.2108 4.44072 14.8864 4.44072C15.562 4.44072 16.2098 4.70929 16.6873 5.18727L16.7636 5.26364C17.3773 5.86394 18.2946 6.03026 19.08 5.68364H19.1818C19.9511 5.35391 20.4512 4.59882 20.4545 3.76182V3.54545C20.4545 2.13964 21.5942 1 23 1C24.4058 1 25.5455 2.13964 25.5455 3.54545V3.66C25.5488 4.497 26.0489 5.25209 26.8182 5.58182C27.6036 5.92844 28.5209 5.76212 29.1345 5.16182L29.2109 5.08545C29.6884 4.60748 30.3362 4.33891 31.0118 4.33891C31.6874 4.33891 32.3353 4.60748 32.8127 5.08545C33.2907 5.5629 33.5593 6.21078 33.5593 6.88636C33.5593 7.56195 33.2907 8.20983 32.8127 8.68727L32.7364 8.76364C32.1361 9.37733 31.9697 10.2946 32.3164 11.08V11.1818C32.6461 11.9511 33.4012 12.4512 34.2382 12.4545H34.4545C35.8604 12.4545 37 13.5942 37 15C37 16.4058 35.8604 17.5455 34.4545 17.5455H34.34C33.503 17.5488 32.7479 18.0489 32.4182 18.8182Z"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>Settings</span>
          </li>
        </ul>
        <div className="two1">
          <div className="input-box">
            <input type="search" name="" id="" placeholder="Search" />
          </div>
          <ul>
            <li>
              <button>
                <svg
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L9.52275 10.5972L6.11363 7.125L1 12.3333"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.8333 4H16V8.16667"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Product View </span>{' '}
              </button>
            </li>
            <li>
              <button>
                <svg
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 14.125C1 13.0895 1.83947 12.25 2.875 12.25H13"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.875 1H13V16H2.875C1.83947 16 1 15.1605 1 14.125V2.875C1 1.83947 1.83947 1 2.875 1Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="orange">Order Book </span>
              </button>
            </li>
            <li>
              <button>
                <svg
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.42857 8.45242C2.42857 4.42868 5.6905 1.16675 9.71429 1.16675C13.7381 1.16675 17 4.42868 17 8.45242C17 12.4762 13.7381 15.7381 9.71429 15.7381C7.69048 15.7381 5.88524 14.9286 4.56571 13.601L5.71524 12.4515C6.73524 13.4796 8.15191 14.1191 9.71429 14.1191C12.8439 14.1191 15.381 11.582 15.381 8.45242C15.381 5.32285 12.8439 2.7858 9.71429 2.7858C6.58467 2.7858 4.04762 5.32285 4.04762 8.45242H6.47619L3.20571 11.7148L0 8.45242H2.42857ZM8.90476 5.21438H10.119V8.65488L12.9524 10.3387L12.3695 11.3182L8.90476 9.26203V5.21438Z"
                    fill="black"
                  />
                </svg>
                <span>Price History</span>{' '}
              </button>
            </li>
            <li>
              <button>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6.81818C1 6.81818 3.90909 1 9 1C14.0909 1 17 6.81818 17 6.81818C17 6.81818 14.0909 12.6364 9 12.6364C3.90909 12.6364 1 6.81818 1 6.81818Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.99999"
                    cy="3.81817"
                    r="2.18182"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Open Orders </span>{' '}
              </button>
            </li>
            <li>
              <button>
                <svg
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM6.4 9.736L11.672 4.464L12.8 5.6L6.4 12L3.2 8.8L4.328 7.672L6.4 9.736Z"
                    fill="#262626"
                  />
                </svg>

                <span>Closed Trades</span>
              </button>
            </li>
            <li>
              <button>
                <svg
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="7.5"
                    stroke="black"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.7494 6.24963L6.2494 10.7496"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M6.2494 6.24963L10.7494 10.7496"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>

                <span>Cancelled Trades</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="three1">
          <div className="one2">
            <div className="one3">
              <h3>Board</h3>
              <ul>
                <li>X-Traded</li>
                <li>OTC</li>
                <li>FI</li>
                <li>Derivatives</li>
              </ul>
            </div>
            <div className="two3">
              <h3>Product</h3>
              <ul>
                <li>All</li>
                <li>SMAZ</li>
                <li>SBBS</li>
                <li>SPRL</li>
                <li>SGNG</li>
                <li>SSGM</li>
                <li>FETC</li>
                <li>SCOC</li>
              </ul>
            </div>
          </div>
          <div className="two2">
            <div className="one4">
              <div className="one5">
                <table>
                  <thead>
                    <tr>
                      <th>Products</th>

                      <th>Quantity</th>

                      <th>Bid Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Soybeans (SSBS) </td>
                      <td>2003</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Paddy Rice (SPRL)</td>
                      <td>11293</td>
                      <td>
                        <span>3627.00 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Maize (SMAZ)</td>
                      <td>1832</td>
                      <td>
                        <span>8294.01</span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sorghum (SSGM) </td>
                      <td>29102</td>
                      <td>
                        <span>8192.00</span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Buy</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="two5">
                <table>
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Quantity</th>
                      <th>Offer Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Soybeans (SSBS) </td>
                      <td>2003</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Paddy Rice (SPRL)</td>
                      <td>11293</td>
                      <td>
                        <span>3627.00 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Maize (SMAZ)</td>
                      <td>1832</td>
                      <td>
                        <span>8294.01</span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sorghum (SSGM) </td>
                      <td>29102</td>
                      <td>
                        <span>8192.00</span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Fair Trade ETC (FETC) </td>
                      <td>3212</td>
                      <td>
                        <span>1736.92 </span>
                        <button>Sell</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="two4">
              <table>
                <thead>
                  <tr>
                    <th colSpan={7}>Trade Log</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Security</th>
                    <th>Board</th>
                    <th>Order Type</th>
                    <th>Matched Price</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Soybeans (SSBS) </td>
                    <td>X-Traded</td>
                    <td>Buy</td>
                    <td>1792.65</td>
                    <td>9265</td>
                    <td>17 Oct, 2020</td>
                    <td>07:38</td>
                  </tr>
                  <tr>
                    <td>Maize (SMAZ)</td>
                    <td>X-Traded</td>
                    <td>Buy</td>
                    <td>1792.65</td>
                    <td>9265</td>
                    <td>8 Sep, 2020</td>
                    <td>02:02</td>
                  </tr>
                  <tr>
                    <td>Maize (SMAZ)</td>
                    <td>OTC</td>
                    <td>Sell</td>
                    <td>1792.65</td>
                    <td>9265</td>
                    <td>24 May, 2020</td>
                    <td>06:42</td>
                  </tr>
                  <tr>
                    <td>Sorghum (SSGM) </td>
                    <td>FI</td>
                    <td>Sell</td>
                    <td>1792.65</td>
                    <td>9265</td>
                    <td>1 Feb, 2020</td>
                    <td>01:09</td>
                  </tr>
                  <tr>
                    <td>Sorghum (SSGM) </td>
                    <td>FI</td>
                    <td>Sell</td>
                    <td>1792.65</td>
                    <td>9265</td>
                    <td>1 Feb, 2020</td>
                    <td>01:09</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer className="dashboard">
        <h3 className="btn-darker">Live Market</h3>
        <ul>
          <li>
            <p>Soybean (SBBS)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Sorghum (SSGM)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Soybean (SBBS)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Maize (SMAZ)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Paddy Rice (SPRL)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Cocoa (SCOC)</p>
            <p>₦30,834.59</p>
          </li>
          <li>
            <p>Soybean (SBBS)</p>
            <p>₦30,834.59</p>
          </li>{' '}
          <li>
            <p>Soybean (SBBS)</p>
            <p>₦30,834.59</p>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default OrderBook;

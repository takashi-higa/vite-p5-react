import 'styles/index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { routes } from 'routes';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            {routes.map(({ path, label, Component }) => {
              return <Route path={path} element={<Component />} key={label} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

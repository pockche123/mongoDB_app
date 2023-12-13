import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SnackPage, BestSnackPage, AddSnackPage, NotFoundPage, HomePage, SnacksPage } from './pages';
import { SnackProvider } from "./contexts";
import { PageWrapper } from './components';

import './assets/app.css';

const App = () => {
    return (
        <>
            <SnackProvider>
                <Routes>
                    <Route path="/" element={<PageWrapper />}>
                        <Route index element={<HomePage />} />
                         <Route path="snacks">
                            <Route index element={<SnacksPage />} />
                            <Route path=":id" element={<SnackPage />} />
                        </Route>

                        <Route path="best" element={<BestSnackPage />} />
                        <Route path="add" element={<AddSnackPage />} />
                        <Route path="*" element={<NotFoundPage />} /> 
                    </Route>
                </Routes>
            </SnackProvider>
        </>
    )
};

export default App;

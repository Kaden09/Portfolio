import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import MainPage from '@/pages/main/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Clud from '@/pages/clud/Clud';
import KillCode from '@/pages/killCode/KillCode';
import ExploreWithMe from '@/pages/exploreWithMe/ExploreWithMe';
import AppLayout from '@/shared/ui/AppLayout/AppLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true, 
				element: <MainPage />,
			},
			{
				path: 'clud',
				element: <Clud />,
			},
			{
				path: 'killCode',
				element: <KillCode />,
			},
			{
				path: 'exploreWithMe',
				element: <ExploreWithMe />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />,
);

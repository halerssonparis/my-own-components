import Image from "next/image";
import vercel from '../../public/vercel.svg';

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto">
				<div className="grid md:grid-cols-2 justify-items-center items-center">
					<Image src={vercel} alt="/" className="w-[400] my-4"/>
					<div className="flex flex-col">
						<p className="text-[#00df9a] font-bold"> DATA ANALYTICS DASHBOARD </p>
						<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Manage Data Analytics Centrally </h1>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more </p>
						<button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]"> Get Started </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Analytics;
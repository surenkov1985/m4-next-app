import { useRouter } from "next/router";
import React from "react";
import { MainLayout } from "../../components/MainLayout";
import ServiceBanners from "../../components/servcesComponents/ServiceBanners";
import ServiceCauses from "../../components/servcesComponents/ServiceCauses";
import ServiceDescription from "../../components/servcesComponents/Servicedescription";
import ServiceInfo from "../../components/servcesComponents/ServiceInfo";
import ServiceMore from "../../components/servcesComponents/ServiceMore";
import ServicePresentation from "../../components/servcesComponents/ServicePresentation";
import ServicesRequest from "../../components/servcesComponents/ServicesRequest";
import ServicesSlider from "../../components/servcesComponents/ServicesSlider";
import ServiceTerms from "../../components/servcesComponents/ServiceTerms";
import ServiceTitle from "../../components/servcesComponents/ServiceTitle";
import { servicePagesData } from "../../variables/pagesData";

export default function flyers(props) {
	const router = useRouter();
	const [data] = servicePagesData.filter((item) => item.id === router.query.id);

	console.log(data);

	return (
		<MainLayout>
			<ServiceTitle id={data?.id} title={data?.titleBlock.title} text={data?.titleBlock.text} icon={data?.titleBlock.icon} subTitle={data?.titleBlock.subTitle} />
			{data?.bannersBlock && <ServiceBanners data={data.bannersBlock} />}
			{data?.descriptionBlock && <ServiceDescription data={data?.descriptionBlock} />}
			{data?.infoBlock && <ServiceInfo data={data.infoBlock} />}
			{data?.presentationBlock && <ServicePresentation data={data.presentationBlock} />}
			{data?.causesBlock && <ServiceCauses data={data.causesBlock} />}
			{data?.moreBlock && <ServiceMore data={data.moreBlock} />}
			{data?.termsBlock && <ServiceTerms data={data.termsBlock} />}
			{data?.requestBlock && <ServicesRequest />}
			{<ServicesSlider theme={data?.sliderTheme} />}
		</MainLayout>
	);
}

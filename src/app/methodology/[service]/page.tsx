import MethodologyView from '@/components/methodology/MethodologyView';

export function generateStaticParams() {
  return [
    { service: 'ux-ui-design' },
    { service: 'flutter-development' },
    { service: 'backend-cloud-development' },
  ];
}

export default function MethodologyPage({
  params,
}: {
  params: { service: string };
}) {
  return <MethodologyView service={params.service} />;
}

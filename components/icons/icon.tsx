import { FC, SVGProps } from 'react'

interface IconProps {
  height?: string
  width?: string
  className?: string
}

export default function Icon(
  SvgComponent: FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> {
  function WithIcon({
    height = '24',
    width = '24',
    className = '',
  }: IconProps) {
    const svgProps = {
      height,
      width,
      className,
    }
    return <SvgComponent {...svgProps} />
  }

  return WithIcon
}

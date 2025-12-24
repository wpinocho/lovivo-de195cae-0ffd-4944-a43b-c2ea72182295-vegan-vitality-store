import { Heart, Leaf, Shield, Zap } from 'lucide-react'

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: '100% Vegano',
      description: 'Todos nuestros productos son completamente libres de ingredientes de origen animal'
    },
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Certificaciones de terceros y pruebas de laboratorio para cada lote'
    },
    {
      icon: Zap,
      title: 'Máxima Absorción',
      description: 'Fórmulas optimizadas para una biodisponibilidad superior'
    },
    {
      icon: Heart,
      title: 'Respaldado por Ciencia',
      description: 'Desarrollado con investigación científica y estudios clínicos'
    }
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { registerOTel } from '@vercel/otel'

export function register() {
    registerOTel({
        serviceName: 'vercel-otel-server', attributes: {
            ['highlight.project_id']: 'lgxj7qdm'
        }
    })
    console.log('registerOTel called in instrumentation.ts')
}
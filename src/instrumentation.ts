import { registerOTel } from '@vercel/otel'

export function register() {
    registerOTel({
        serviceName: 'next-app-instrumented', attributes: {
            ['highlight.project_id']: 'lgxj7qdm'
        }
    })
}
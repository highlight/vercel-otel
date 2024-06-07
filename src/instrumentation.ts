import { registerOTel } from '@vercel/otel'

export function register() {
    registerOTel({
        serviceName: 'next-app-instrumented', attributes: {
            ['highlight.project_id']: 'lgxj7qdm',
            ['highlight.session_id']: '123',
            // ['highlight.trace_id']: 'abc'
        }
    })
}
'use server';
import { cookies } from 'next/headers';
import { context, trace } from '@opentelemetry/api';


export async function initHighlightServer() {
    const tracer = trace.getTracer('vercel-otel-tracer');
    const span = tracer.startSpan('initHighlightServer');

    const requestCookies = cookies();
    const sessionSecureID = requestCookies.get('sessionSecureID');
    const activeSpan = trace.getSpan(context.active());

    console.log('All cookies:', requestCookies.getAll());

    activeSpan?.setAttribute('highlight.session_id', sessionSecureID?.value || '');

    console.log('setting sessionSecureID', sessionSecureID?.value || 'missing')

    span.end();
}

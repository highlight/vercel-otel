'use server';
import { cookies } from 'next/headers';
import { context, trace } from '@opentelemetry/api';


export async function initHighlightServer() {
    const tracer = trace.getTracer('vercel-otel-tracer');
    const span = tracer.startSpan('initHighlightServer');

    const sessionSecureID = cookies().get('sessionSecureID');
    const activeSpan = trace.getSpan(context.active());

    activeSpan?.setAttribute('highlight.session_id', sessionSecureID?.value || '');

    console.log('setting sessionSecureID', sessionSecureID?.value || 'missing')

    span.end();
}

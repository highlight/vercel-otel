'use server';
import { cookies } from 'next/headers';
import { context, trace } from '@opentelemetry/api';


export async function initHighlightServer() {
    const sessionSecureID = cookies().get('sessionSecureID');
    const activeSpan = trace.getSpan(context.active());

    activeSpan?.setAttribute('highlight.session_id', sessionSecureID?.value || '');
}
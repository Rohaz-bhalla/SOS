/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.OfficerInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.createMany(input as any))),

        create: procedure.input($Schema.OfficerInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.create(input as any))),

        deleteMany: procedure.input($Schema.OfficerInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.deleteMany(input as any))),

        delete: procedure.input($Schema.OfficerInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.delete(input as any))),

        findFirst: procedure.input($Schema.OfficerInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).officer.findFirst(input as any))),

        findMany: procedure.input($Schema.OfficerInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).officer.findMany(input as any))),

        findUnique: procedure.input($Schema.OfficerInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).officer.findUnique(input as any))),

        updateMany: procedure.input($Schema.OfficerInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.updateMany(input as any))),

        update: procedure.input($Schema.OfficerInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).officer.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.OfficerCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.OfficerCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfficerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfficerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfficerGetPayload<T>, Context>) => Promise<Prisma.OfficerGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.OfficerDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.OfficerDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfficerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfficerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfficerGetPayload<T>, Context>) => Promise<Prisma.OfficerGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.OfficerFindFirstArgs, TData = Prisma.OfficerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OfficerFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OfficerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfficerFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfficerFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OfficerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OfficerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.OfficerFindManyArgs, TData = Array<Prisma.OfficerGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.OfficerFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.OfficerGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfficerFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfficerFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.OfficerGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.OfficerGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.OfficerFindUniqueArgs, TData = Prisma.OfficerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OfficerFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OfficerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfficerFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfficerFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OfficerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OfficerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.OfficerUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.OfficerUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfficerUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfficerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfficerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfficerUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfficerUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfficerGetPayload<T>, Context>) => Promise<Prisma.OfficerGetPayload<T>>
            };

    };
}

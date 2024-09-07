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

        createMany: procedure.input($Schema.SessionDataInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.createMany(input as any))),

        create: procedure.input($Schema.SessionDataInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.create(input as any))),

        deleteMany: procedure.input($Schema.SessionDataInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.deleteMany(input as any))),

        delete: procedure.input($Schema.SessionDataInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.delete(input as any))),

        findFirst: procedure.input($Schema.SessionDataInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).sessionData.findFirst(input as any))),

        findMany: procedure.input($Schema.SessionDataInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).sessionData.findMany(input as any))),

        findUnique: procedure.input($Schema.SessionDataInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).sessionData.findUnique(input as any))),

        updateMany: procedure.input($Schema.SessionDataInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.updateMany(input as any))),

        update: procedure.input($Schema.SessionDataInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sessionData.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SessionDataCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SessionDataCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionDataGetPayload<T>, Context>) => Promise<Prisma.SessionDataGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SessionDataDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SessionDataDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionDataGetPayload<T>, Context>) => Promise<Prisma.SessionDataGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SessionDataFindFirstArgs, TData = Prisma.SessionDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionDataFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionDataFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionDataFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SessionDataFindManyArgs, TData = Array<Prisma.SessionDataGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SessionDataFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SessionDataGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionDataFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionDataFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SessionDataGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SessionDataGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SessionDataFindUniqueArgs, TData = Prisma.SessionDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionDataFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionDataFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionDataFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SessionDataUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SessionDataUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDataUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDataUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDataUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionDataGetPayload<T>, Context>) => Promise<Prisma.SessionDataGetPayload<T>>
            };

    };
}

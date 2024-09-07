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

        createMany: procedure.input($Schema.SosAlertInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.createMany(input as any))),

        create: procedure.input($Schema.SosAlertInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.create(input as any))),

        deleteMany: procedure.input($Schema.SosAlertInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.deleteMany(input as any))),

        delete: procedure.input($Schema.SosAlertInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.delete(input as any))),

        findFirst: procedure.input($Schema.SosAlertInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).sosAlert.findFirst(input as any))),

        findMany: procedure.input($Schema.SosAlertInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).sosAlert.findMany(input as any))),

        findUnique: procedure.input($Schema.SosAlertInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).sosAlert.findUnique(input as any))),

        updateMany: procedure.input($Schema.SosAlertInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.updateMany(input as any))),

        update: procedure.input($Schema.SosAlertInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sosAlert.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SosAlertCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SosAlertCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SosAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SosAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SosAlertGetPayload<T>, Context>) => Promise<Prisma.SosAlertGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SosAlertDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SosAlertDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SosAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SosAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SosAlertGetPayload<T>, Context>) => Promise<Prisma.SosAlertGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SosAlertFindFirstArgs, TData = Prisma.SosAlertGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SosAlertFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SosAlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SosAlertFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SosAlertFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SosAlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SosAlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SosAlertFindManyArgs, TData = Array<Prisma.SosAlertGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SosAlertFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SosAlertGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SosAlertFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SosAlertFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SosAlertGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SosAlertGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SosAlertFindUniqueArgs, TData = Prisma.SosAlertGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SosAlertFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SosAlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SosAlertFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SosAlertFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SosAlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SosAlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SosAlertUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SosAlertUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SosAlertUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SosAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SosAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SosAlertUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SosAlertUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SosAlertGetPayload<T>, Context>) => Promise<Prisma.SosAlertGetPayload<T>>
            };

    };
}

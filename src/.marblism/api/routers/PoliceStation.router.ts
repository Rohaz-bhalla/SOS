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

        createMany: procedure.input($Schema.PoliceStationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.createMany(input as any))),

        create: procedure.input($Schema.PoliceStationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.create(input as any))),

        deleteMany: procedure.input($Schema.PoliceStationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.deleteMany(input as any))),

        delete: procedure.input($Schema.PoliceStationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.delete(input as any))),

        findFirst: procedure.input($Schema.PoliceStationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).policeStation.findFirst(input as any))),

        findMany: procedure.input($Schema.PoliceStationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).policeStation.findMany(input as any))),

        findUnique: procedure.input($Schema.PoliceStationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).policeStation.findUnique(input as any))),

        updateMany: procedure.input($Schema.PoliceStationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.updateMany(input as any))),

        update: procedure.input($Schema.PoliceStationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).policeStation.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PoliceStationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PoliceStationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PoliceStationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PoliceStationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PoliceStationGetPayload<T>, Context>) => Promise<Prisma.PoliceStationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PoliceStationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PoliceStationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PoliceStationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PoliceStationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PoliceStationGetPayload<T>, Context>) => Promise<Prisma.PoliceStationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PoliceStationFindFirstArgs, TData = Prisma.PoliceStationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PoliceStationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PoliceStationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PoliceStationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PoliceStationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PoliceStationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PoliceStationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PoliceStationFindManyArgs, TData = Array<Prisma.PoliceStationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PoliceStationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PoliceStationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PoliceStationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PoliceStationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PoliceStationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PoliceStationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PoliceStationFindUniqueArgs, TData = Prisma.PoliceStationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PoliceStationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PoliceStationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PoliceStationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PoliceStationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PoliceStationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PoliceStationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PoliceStationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PoliceStationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PoliceStationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PoliceStationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PoliceStationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PoliceStationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PoliceStationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PoliceStationGetPayload<T>, Context>) => Promise<Prisma.PoliceStationGetPayload<T>>
            };

    };
}

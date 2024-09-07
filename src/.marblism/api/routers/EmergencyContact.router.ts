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

        createMany: procedure.input($Schema.EmergencyContactInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.createMany(input as any))),

        create: procedure.input($Schema.EmergencyContactInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.create(input as any))),

        deleteMany: procedure.input($Schema.EmergencyContactInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.deleteMany(input as any))),

        delete: procedure.input($Schema.EmergencyContactInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.delete(input as any))),

        findFirst: procedure.input($Schema.EmergencyContactInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).emergencyContact.findFirst(input as any))),

        findMany: procedure.input($Schema.EmergencyContactInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).emergencyContact.findMany(input as any))),

        findUnique: procedure.input($Schema.EmergencyContactInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emergencyContact.findUnique(input as any))),

        updateMany: procedure.input($Schema.EmergencyContactInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.updateMany(input as any))),

        update: procedure.input($Schema.EmergencyContactInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyContact.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmergencyContactCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmergencyContactCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyContactGetPayload<T>, Context>) => Promise<Prisma.EmergencyContactGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmergencyContactDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmergencyContactDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyContactGetPayload<T>, Context>) => Promise<Prisma.EmergencyContactGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmergencyContactFindFirstArgs, TData = Prisma.EmergencyContactGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyContactFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyContactFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyContactFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmergencyContactFindManyArgs, TData = Array<Prisma.EmergencyContactGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyContactFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmergencyContactGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyContactFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyContactFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmergencyContactGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmergencyContactGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmergencyContactFindUniqueArgs, TData = Prisma.EmergencyContactGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyContactFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyContactFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyContactFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmergencyContactUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmergencyContactUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyContactUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyContactUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyContactUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyContactGetPayload<T>, Context>) => Promise<Prisma.EmergencyContactGetPayload<T>>
            };

    };
}
